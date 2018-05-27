www//import react from react
import React from 'react';
//import element from reacr native
import { StyleSheet, Text, View,AsyncStorage } from 'react-native';
//import Header from react native elements
import { Header} from 'react-native-elements';
//import axios to make router works
import axios from 'axios';
//import the icon from lirbary  one by one (each one library in react native icon)
import Icon0 from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/MaterialIcons';
import Icon6 from 'react-native-vector-icons/Octicons';
import Icon7 from 'react-native-vector-icons/Foundation';

const userRole={
  // (Mother) female /  (Father) male/ child (Children)
  'Mother':'female',
  'Father':'male',
  'Child':'child',
}


//export Bar from the react componant
export default class BarParents extends React.Component{
  //the constructor
  constructor(){
    //super for ES6
    super();
    //all the data save before to can show in the bar
    this.state={
      //defult thing when change from data base change here 🙂 <3
      // (Mother) female /  (Father) male/ child (Children)
      role:'Mother',
      //from 100%
      userProgress:'100',
      //for how many child in family
      userRanking:'2',
      //the money still
      restMoney:'1500',
    };
    //run the function to save the email in this.state,userSave
    this.callOrder(this.setUserRole.bind(this))
  }
  callOrder(cb){
    cb()
  }
  setUserRole=async()=>{
    try{
      let role=await AsyncStorage.getItem('role')
      this.setState({role:role})
    }
    catch(error){
      alert(error)
    }
  }
  //render
  render() {
    //what return
    return (
      <View style={styles.allPage}>
        <View style={styles.barView}>
          <Header
            backgroundColor='#123456'
            innerContainerStyles={styles.innerContainer}
            outerContainerStyles={styles.outerContainer}

            leftComponent={
              <View  style={styles.leftComponent}>
                <Icon0 onPress={() =>this.props.navigation.openDrawer()} style={{color:'#0bf5fb'}} name="bars" size={35}/>
                <Text onPress={() => this.props.navigation.openDrawer()} style={styles.textUnderIcon}>Menu</Text>
              </View>
            }

            centerComponent={
              <View style={styles.centerComponentView}>
                <View  style={styles.centerComponent}>
                  <Icon0 onPress={() =>this.props.navigation.navigate('User Information')} name={userRole[this.state.role]} size={35} color="red"/>
                  <Text onPress={() =>this.props.navigation.navigate('User Information')} style={styles.textUnderIcon}>
                    {this.state.role}
                  </Text>
                </View>

               
              
                <View style={styles.lastCenterComponent}>
                  <Text onPress={() =>this.props.navigation.navigate('Finance')} style={styles.textIconMoney}>{this.state.restMoney}</Text>
                  <Text onPress={() =>this.props.navigation.navigate('Finance')} style={styles.textUnderIcon}>
                    Money
                  </Text>
                </View>
              </View>
            }

            rightComponent={
              <View style={styles.rightComponent}>
                <Icon6 onPress={() => this.props.navigation.navigate('Tasks')} style={{color:'#0bf5fb'}} 
                  name="checklist" size={35}/>
                <Text onPress={() =>this.props.navigation.navigate('Tasks')} style={styles.textUnderIcon}>Tasks</Text>
              </View>
            }
          >
          </Header>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  allPage: {
    //flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  barView: {
    flexDirection: 'column',
    //When finish delet this
    marginTop:25,
  },
  innerContainer: {
    //backgroundColor:'green',
    flexDirection: 'row',
    alignItems: 'center',
    margin:-12,
  },
  leftComponent: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    marginLeft:5,
    alignItems: 'center',
  },
  rightComponent: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    marginRight:5,
    alignItems: 'center',

  },
  centerComponentView: {
    flexDirection: 'row',
    //backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstCenterComponent: {
    marginRight:15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerComponent: {
    marginRight:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastCenterComponent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textUnderIcon: {
    fontSize: 15,
    textAlign:'center',
    fontWeight: 'bold',
    color:'white',
  },
  textIconDone: {
    fontSize: 23,
    textAlign:'center',
    fontWeight: 'bold',
    color:'#3cff00',
  },
  textIconRank: {
    fontSize: 23,
    textAlign:'center',
    fontWeight: 'bold',
    color:'red',
  },
  textIconMoney: {
    fontSize: 23,
    textAlign:'center',
    fontWeight: 'bold',
    color:'#3cff00',
  },
  otherView: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: 'white',
    //comment this after finish
    marginBottom:35,
  },
});