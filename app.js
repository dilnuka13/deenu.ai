import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabase = createClient(
  "https://auarltmtiutjcfrvvfix.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1YXJsdG10aXV0amNmcnZ2Zml4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MTI1OTQsImV4cCI6MjA3ODA4ODU5NH0.JXeC9rOrUF2OExkFZIz5ywQJSDP2ht17CoY5QnqoP8I"
);

supabase.auth.getSessionFromUrl().then(({ data, error }) => {
  if (!error) {
    console.log("✅ Login success!", data.session);

    window.history.replaceState({}, document.title, "/deenu.ai/");
  }
});
