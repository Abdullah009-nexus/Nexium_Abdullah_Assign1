import { supabase } from './supabase.js';

async function fetchTasks() {
  const { data, error } = await supabase.from('tasks').select('*');

  if (error) {
    console.error('Error fetching tasks:', error.message);
  } else {
    console.log('Tasks:', data);
  }
}

fetchTasks();
