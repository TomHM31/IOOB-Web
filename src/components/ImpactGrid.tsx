import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import EventCard from './EventCard';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  amount_raised: number;
}

interface Gathering {
  id: string;
  date: string;
  location: string;
  details: string;
}

export default function ImpactGrid() {
  const [events, setEvents] = useState<Event[]>([]);
  const [gatherings, setGatherings] = useState<Gathering[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [loadingGatherings, setLoadingGatherings] = useState(true);

  useEffect(() => {
    fetchEvents();
    fetchGatherings();
  }, []);

  async function fetchEvents() {
    try {
      const { data } = await supabase
        .from('charity_events')
        .select('*')
        .order('date', { ascending: false })
        .limit(1);
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoadingEvents(false);
    }
  }

  async function fetchGatherings() {
    try {
      const { data } = await supabase
        .from('gatherings')
        .select('*')
        .order('date', { ascending: true })
        .limit(1);
      setGatherings(data || []);
    } catch (error) {
      console.error('Error fetching gatherings:', error);
    } finally {
      setLoadingGatherings(false);
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="bg-gradient-to-b from-white to-amber-50 py-16 px-4 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-red-900 mb-12 text-center">
          Our Community Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              Recent Charity Events
            </h3>
            <div className="space-y-6">
              {events.length > 0 ? (
                events.map((event, index) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    date={formatDate(event.date)}
                    description={event.description}
                    amount={
                      event.amount_raised ? `$${event.amount_raised.toLocaleString()}` : undefined
                    }
                    image={index === 0 ? '/ioob2.jpg' : index === 1 ? '/ioob3.jpg' : undefined}
                  />
                ))
              ) : (
                <>
                  <EventCard
                    title="Winter Appeal 2024"
                    date="July 2024"
                    description="Supporting those in need during the cold months."
                    image="/ioob2.jpg"
                  />
                  <EventCard
                    title="Community Outreach"
                    date="June 2024"
                    description="Making a difference in Melbourne, one event at a time."
                    image="/ioob3.jpg"
                  />
                </>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              Upcoming Gatherings
            </h3>
            {loadingGatherings ? (
              <EventCard title="Loading..." description="Fetching upcoming meetings..." />
            ) : gatherings.length > 0 ? (
              gatherings.map((gathering) => (
                <EventCard
                  key={gathering.id}
                  title={gathering.location}
                  date={formatDate(gathering.date)}
                  description={gathering.details}
                />
              ))
            ) : (
              <EventCard
                title="Next Meeting"
                date="Third Thursday of every second month"
                description="Mark your calendar for our next gathering. Exact dates and locations will be announced soon."
              />
            )}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              How to Join
            </h3>
            <div className="bg-white rounded-lg shadow-md border-l-4 border-red-900 p-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-red-900 mb-2">Step 1: Get in Touch</p>
                  <p className="text-gray-700 text-sm">
                    Send us a message on Facebook or email us at ioob@outlook.com.au
                  </p>
                </div>
                <div>
                  <p className="font-bold text-red-900 mb-2">Step 2: Learn More</p>
                  <p className="text-gray-700 text-sm">
                    We'll tell you about upcoming gatherings and what we're all about.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-red-900 mb-2">Step 3: Join Us</p>
                  <p className="text-gray-700 text-sm">
                    Come along to the next gathering and meet your fellow old bastards!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
