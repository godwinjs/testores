import Agenda, { Job } from 'agenda';
// import connect from '@/app/db/utils/connect';

// Get MongoDB connection string from environment variables
const mongoConnectionString: string = process.env.MONGO_URI || 'mongodb://localhost:27017/agenda';

// try {
//     connect();
// }catch (err){
//     console.log("Err connecting to DB: ", err)
// }
// Initialize Agenda
const agenda = new Agenda({ db: { address: mongoConnectionString } });

// Define a background job with TypeScript types
agenda.define('process long task', async (job: Job<{ data: any }>) => {
  const { data } = job.attrs;
  console.log('Processing long task with data:', data);
  
  // Simulate a long-running task
  await new Promise((resolve) => setTimeout(resolve, 5000));
});

// Start the Agenda instance
(async function() {
  await agenda.start();
})();

export default agenda;