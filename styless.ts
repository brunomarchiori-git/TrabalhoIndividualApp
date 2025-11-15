import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    gap: 15,
  },

  logo: {
    width: 180,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fafafa',
  },

  esqSenha: {
    width: '100%',
    alignItems: 'flex-end',
  },

  esqueceuSenha: {
    color: '#3797EF',
    fontSize: 12,
    marginBottom: 5,
  },

  loginBtn: {
    width: '100%',
    height: 45,
    backgroundColor: '#3797EF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 5,
  },

  loginText: {
    color: '#fff',
    fontWeight: '600',
  },

  ou: {
    marginVertical: 10,
    color: '#666',
    fontWeight: '600',
  },

  facebook: {
    color: '#1877F2',
    fontWeight: '600',
  },

  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
  },

  nConta: {
    color: '#666',
  },

  cadConta: {
    color: '#3797EF',
    fontWeight: '600',
  },
});
