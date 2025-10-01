export default function App() {
  const phone = "+1-519-804-4929";
  const email = "grandriverpropertyservices@gmail.com";

  return (
    <div style={{fontFamily: 'sans-serif', padding: '2rem'}}>
      <h1>Grand River Property Services</h1>
      <p>Handyman services in Kitchener, Waterloo, Cambridge.</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </div>
  );
}
