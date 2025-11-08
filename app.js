import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabase = createClient(
   "YOUR_SUPABASE_URL",
  "YOUR_SUPABASE_ANON_KEY"
);

supabase.auth.getSessionFromUrl().then(({ data, error }) => {
  if (!error) {
    console.log("✅ Login success!", data.session);

    window.history.replaceState({}, document.title, "/deenu.ai/");
  }
});
