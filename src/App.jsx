export default function App() {
  const phone = "+1-519-804-4929";
  const email = "grandriverpropertyservices@gmail.com";

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Grand River Property Services</h1>
      <p>Handyman services in Kitchener, Waterloo, and Cambridge.</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Email:</strong> {email}</p>
      <p>
        We handle drywall, carpentry, painting, tile, minor plumbing, exterior repairs,
        and general property maintenance. Free estimates available.
      </p>
    </div>
  );
}
