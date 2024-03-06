import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://musgnahkydafvprdjakv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11c2duYWhreWRhZnZwcmRqYWt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4MzUzNTQsImV4cCI6MjAyNDQxMTM1NH0.qWUVP_aRx6712VQclL58xLKw3ItflV6ljOcr-I3sYCA"
);
export default supabase;
