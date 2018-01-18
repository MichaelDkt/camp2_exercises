import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';


class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      image : ''
    };
  }

  componentDidMount() {
    fetch(`https://api.punkapi.com/v2/beers/random`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        title: json[0].name,
        description : json[0].description,
        image : json[0].image_url
      });
    })
    .catch(error => {
      console.warn(error);
    });
  }

  render() {
    console.log(this.state.image)
    return (
      <View style={styles.container}>
        <Image
          style={{width: 40, height: 200}}
          source={{uri: this.state.image}}
        />
        <Text style={styles.title}>{this.state.title}</Text>
        <Text>{this.state.description}</Text>
      </View>
    )
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    fontWeight: 'bold',
    color : 'white',
  },
});

export default Beer;
