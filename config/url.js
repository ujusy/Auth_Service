const env = process.env.NODE_ENV || 'local';

let store;
let studio;

if (['production', 'stage', 'test', 'dev'].includes(env)) {
  if (!process.env.FRONTEND_STORE_URL) throw Error('STORE_URL 환경변수가 설정되어 있지 않습니다.');
  store = process.env.FRONTEND_STORE_URL;

  if (!process.env.FRONTEND_STUDIO_URL) throw Error('STUDIO_URL 환경변수가 설정되어 있지 않습니다.');
  studio = process.env.FRONTEND_STUDIO_URL;
} else {
  store = process.env.FRONTEND_STORE_URL || '';
  studio = process.env.FRONTEND_STUDIO_URL || '';
}

const resetPassword = (id, secret) => (`${studio}/reset/password?id=${id}&secret=${secret}`);
const validateEmail = (id, secret) => (`${studio}/confirmEmail?id=${id}&secret=${secret}`);

module.exports = {
  resetPassword,
  store,
  studio,
  validateEmail,
};