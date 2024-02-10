import React, { useEffect, useState } from 'react';
import gifos from 'github-readme-terminal';

const AnimatedTerminal = () => {
  const [githubStats, setGithubStats] = useState(null);

  useEffect(() => {
    // Fetch your custom data or perform any necessary operations
    const fetchData = async () => {
      // Example: Fetching some custom data
      const customData = await fetchCustomData();
      // Update the state with the fetched data
      setGithubStats(customData);
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  return (
    <div>
      {githubStats ? (
        <TerminalComponent githubStats={githubStats} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const TerminalComponent = ({ githubStats }) => {
  // Initialize the terminal
  const t = gifos.Terminal({
    width: 320,
    height: 240,
    xpad: 5,
    ypad: 5
  });

  // Generate text for the terminal
  t.gen_text("Hello World!", 1);
  t.gen_text("Custom content goes here!", 2);

  // Optionally, use the fetched data to generate additional content
  if (githubStats) {
    t.gen_text(`Custom data: ${githubStats}`, 3);
  }

  // Generate the GIF
  t.gen_gif();

  // Upload the generated image (if required)
  const image = gifos.utils.upload_imgbb({
    file_name: "output.gif",
    expiration: 60
  });

  return (
    <div>
      <img src={image.url} alt="Animated terminal" />
    </div>
  );
};

// Define your custom function to fetch data
const fetchCustomData = async () => {
  // Implement your data fetching logic here
};

export default AnimatedTerminal;
