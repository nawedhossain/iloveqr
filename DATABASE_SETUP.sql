# Database Setup for I Love QR Code

To use the save features, please run this SQL in your Supabase SQL Editor:

```sql
-- Create qr_codes table
create table public.qr_codes (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  type text not null,
  title text not null,
  content_payload jsonb not null,
  style_settings jsonb not null,
  logo_url text, -- Store as base64 or upload to storage
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Set up RLS (Row Level Security)
alter table public.qr_codes enable row level security;

-- Policy: Users can see their own QR codes
create policy "Users can view their own qr codes"
  on public.qr_codes for select
  using ( auth.uid() = user_id );

-- Policy: Users can insert their own QR codes
create policy "Users can create their own qr codes"
  on public.qr_codes for insert
  with check ( auth.uid() = user_id );

-- Policy: Users can delete their own QR codes
create policy "Users can delete their own qr codes"
  on public.qr_codes for delete
  using ( auth.uid() = user_id );
```

## Storage Setup (Optional)
If you want to support real logo uploads instead of base64:
1. Create a public bucket called `qr-logos`.
2. Add RLS policies for authenticated users to upload to `user_id/` folders.
