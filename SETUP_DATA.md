# IOOB-Melbourne Database Setup

## Adding Sample Data

To populate the landing page with sample charity events and gatherings, you can add data directly through the Supabase dashboard or use the following SQL queries:

### Adding a Sample Charity Event

```sql
INSERT INTO charity_events (title, date, description, amount_raised)
VALUES (
  'Winter Warmth Drive',
  '2024-07-15 19:00:00',
  'Collected blankets and warm clothing for local homeless shelters. Our community donated generously!',
  2500
);
```

### Adding a Sample Gathering

```sql
INSERT INTO gatherings (date, location, details)
VALUES (
  '2024-08-15 19:00:00',
  'The Old Oak Pub, Carlton',
  'Third Thursday gathering. All are welcome to join us for an evening of good company and conversation.'
);
```

## Accessing Supabase Dashboard

1. Go to https://supabase.com
2. Sign in to your project
3. Navigate to the SQL Editor
4. Run the queries above to add sample data
5. The landing page will automatically display the data

## Table Structures

### charity_events
- `id` - Unique identifier
- `title` - Event name
- `date` - Event timestamp
- `description` - Details about the event
- `amount_raised` - Amount raised (optional)
- `created_at` - Creation timestamp

### gatherings
- `id` - Unique identifier
- `date` - Meeting timestamp
- `location` - Where the gathering takes place
- `details` - Additional information
- `created_at` - Creation timestamp
