import {
  Navbar,
  Hero,
  HomeCards,
  JobListings,
  ViewAllJobs,
} from "./components/index";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default App;
