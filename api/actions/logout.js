export default function logout(req) {
  return new Promise((resolve, reject) => {
    req.session.destroy(() => {
      req.session = null;
      return resolve(null);
    });
  });
}
