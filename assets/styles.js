import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  MainContainer :{
    justifyContent: 'center',
    flex:1,
    margin: 20,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,  
  },
  inputfield: {
    height: 40,
    width: "95%",
    borderWidth: 1,
    marginBottom: 20,
    borderColor: '#FF5722',
    borderRadius: 10 ,
    paddingLeft:6
  },
  myheadertitlestyle: {
    textAlign: 'center', color:'#fff',
  },
  myheaderstyle: {
    backgroundColor: '#f4511e',
  },
  textWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  iconWrap: {
    marginTop: 2,
    marginLeft: 3
  }
});
