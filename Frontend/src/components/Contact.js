// import React, { useState } from 'react';
// import { Card, Button } from "react-bootstrap";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Send formData to your server
//     // You'll need to set up an API endpoint to handle this
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       <Card
//         className="text-center"
//         style={{
//           backgroundColor: 'rgba(255, 255, 255, 0.1)',
//           borderColor: 'none',
//           padding: '20px',
//           maxWidth: '600px', // You can adjust this to control the card width
//         }}
//       >
//         <Card.Body>
//           <Card.Title style={{ color: 'white', fontSize: '2rem', textAlign: 'center' }}>
//             Get In Touch
//           </Card.Title>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               onChange={handleChange}
//               style={{ display: 'block', width: '100%', marginTop: '30px', marginBottom: '20px', background: 'transparent', color: 'white' }}
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email Address"
//               onChange={handleChange}
//               style={{ display: 'block', width: '100%', marginBottom: '20px', background: 'transparent', color: 'white' }}
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               onChange={handleChange}
//               style={{ display: 'block', width: '100%', marginBottom: '10px', minHeight: '100px', background: 'transparent', color: 'white' }}
//             />
//             <Button type="submit" variant="primary">Submit</Button>
//           </form>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default Contact;
