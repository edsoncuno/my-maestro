export default function App() {
  const styles = { border: "none", "width":"100%", "height":"100%"};

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.8832355482296!2d-76.93598452363076!3d-12.03444829027043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c41e76af6963%3A0x30e88e869ed2438f!2sQuiquia%20motors!5e0!3m2!1sen!2spe!4v1690312857820!5m2!1sen!2spe"
      style={styles}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
