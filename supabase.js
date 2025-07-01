// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vpqdyqwisnzydigfwlxi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwcWR5cXdpc256eWRpZ2Z3bHhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMDgwNjEsImV4cCI6MjA2Njg4NDA2MX0.tu8a7-eX8HmwriN7wfhS37GevPRl4mPWePRGulp3TDI'; 

export const supabase = createClient(supabaseUrl, supabaseKey);
