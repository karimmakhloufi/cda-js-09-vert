import { useQuery, gql } from "@apollo/client";
import "./App.css";

const GET_LAUNCHES = gql`
  query GetLaunches {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="App">
      <div className="App">
        {data.launches.map((launch) => (
          <li>{launch.launch_date_utc}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
