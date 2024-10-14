import { useEffect, useState } from "react";

const URL = "https://tydjdaenzxsxyznbknib.supabase.co/rest/v1/example?select=*";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5ZGpkYWVuenhzeHl6bmJrbmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5MDkwMjAsImV4cCI6MjA0NDQ4NTAyMH0.JZx5ASrvRwCtyF-yivH6rBJAb_Zf_EJuyMXLuXtXLIE";

type Item = {
  /**
   * A unique ID
   */
  id: number;

  /**
   * The date the whatever was created
   */
  created_at: string;

  /**
   * Some random thing we added
   */
  name: string;
};

const getData = async (): Promise<Item[]> => {
  const response = await fetch(URL, {
    headers: {
      apiKey: API_KEY,
    },
  });

  const data = await response.json();
  return data;
};

export const Page = () => {
  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    getData().then(setList);
  }, []);

  return (
    <div>
      {list.map(({ id, name }) => {
        return (
          <div>
            {id} | {name}
          </div>
        );
      })}
    </div>
  );
};
