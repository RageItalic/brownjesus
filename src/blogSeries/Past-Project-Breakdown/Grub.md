&nbsp;&nbsp;

**Note:** Before you begin reading, I'm sorry the code snippets are not responsive and formatted properly.. I'm working on it!

&nbsp;&nbsp;

Some time ago, when I was free for a couple of hours, I decided to challenge myself. I really wanted to get into React Native because I had heard it wasn’t that much different from React and it could help me not only build entirely new native apps from the ground up, but also add native front ends to any existing backends I might already have.

&nbsp;&nbsp;

## The Challenge

&nbsp;&nbsp;

Build a tiny, but cool app using React Native.

&nbsp;&nbsp;

## The Idea

&nbsp;&nbsp;

I had a couple ideas that I was toying with, but one stood out from the rest. An app that would allow its users to find free pizza and beer around them. Yeah, I know, that sounds cool. If you're wondering how I did this... keep reading (its nothing special tbh... but it is ingenious).

&nbsp;&nbsp;

## Putting the Pieces Together

&nbsp;&nbsp;

I knew I wanted to use React Native. Prior to this project, I knew very little about React Native. Most of what I knew was the result of a talk I had attended some time earlier where I watched someone put together a recipe book app using React Native and its native storage capabilities + expo.

&nbsp;&nbsp;

Looking into the documentation, I came across the location api that comes out of the box. So I knew how to find the user, no matter where they were.

&nbsp;&nbsp;

Next up, I had to decide how the app was going to function. But to do that, I had to decide what it was going to look like. I knew my basic requirements: build a **tiny, but cool** app that allows its users to find **free pizza and beer around them.** So, with this, I knew I had to keep the app simple and minimal. No fuss. I also knew I only had to provide my users with two options: Pizza or Beer. The first idea that popped into my head was to have a "home screen" that quite simply displays two icons: one for pizza and one for beer. Clicking on either takes you to a page that renders a list of cards with all the places that are currently offering the **grub** (get it?) of your choice. Which also meant I would have to dive into React Native Navigation. To keep things simple at the beginning, I opted for conditional rendering and decided to add in navigation later.

&nbsp;&nbsp;

Now that I had my basic idea mapped out, it was time for the "magic sauce"... the actual piece of code that made the whole app worth building and worth using. How does one simply find free pizza and beer around oneself? Enter [Meetup](http://meetup.com). As we all know, there are multiple meetups that offer free pizza and beer in exchange for attendance. So, I could quite simply query the meetups api with the users location and the keywords "pizza" or "beer" based on the users choice and get back an array of data that I could render into a list of cards. See, I told you... it wasn't that special...but still pretty cool.

&nbsp;&nbsp;

That basically covers all of it.

&nbsp;&nbsp;

## The Execution

&nbsp;&nbsp;

I used **Create React Native App** to build out the skeleton and flexbox for the positioning of all the elements.

&nbsp;&nbsp;

The Home Screen was pretty simple. Just two icons, stacked vertically, that would link to other screens.

&nbsp;&nbsp;

```jsx
//the render method for the home screen
render() {
    if (this.state.view === 'mainMenu' && this.state.loading === true) {
      return <AppLoading />
    }

    return (
      <Container>
        <View style={styles.option}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Pizza')}>
            <SvgUri width="170" height="170" source={require('../svgs/Pizza.svg')} />
          </TouchableOpacity>
        </View>
        <View style={styles.option}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Beer')}>
            <SvgUri width="170" height="170" source={require('../svgs/Beer.svg')} />
          </TouchableOpacity>
        </View>
      </Container>
    )
  }
```

&nbsp;&nbsp;

The Pizza and Beer screens were basically the same screen, rendered with different options. But because I was just getting started, I thought it best to separate them.

&nbsp;&nbsp;

All I needed to do on both screens was:

1. Grab the users current location
2. Call the Meetup api to find upcoming events around that location
3. Filter through all the data returned to narrow it down to events that mentioned the option selected by the user
4. Sort that data by date and time so that the events happening the soonest are at the top
5. Store the filtered and sorted data in the component state
6. Map over the data to render a list of cards.

&nbsp;&nbsp;

Luckily, this is exactly what `componentDidMount` was built for. Although, steps 4 and 5 seemed perfect to be split into a helper function in a separate file and called later to avoid repetition.

&nbsp;&nbsp;

```jsx
//helper file to filter data
function compareAndSortByDate(a, b) {
  if (a.local_date < b.local_date) return -1;
  if (a.local_date > b.local_date) return 1;
  return 0;
}

export const upcomingEventsNearYou = (response, option) => {
  const filteredEvents = response.data.events
    .map(
      ({
        name,
        id,
        description,
        local_date,
        local_time,
        link,
        group: { urlname, lat, lon },
      }) => ({
        id,
        urlname,
        link,
        name,
        description,
        coordinates: {
          latitude: lat,
          longitude: lon,
        },
        local_date,
        local_time,
      })
    )
    .filter((event) => event.description && event.description.includes(option));

  return filteredEvents.sort(compareAndSortByDate);
};
```

&nbsp;&nbsp;

```jsx
//component did mount for the pizza screen (very similar to beer screen)
componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        const url = `https://api.meetup.com/find/
        upcoming_events?photo-host=public&page=300&sig_id={mySigId}&lon=+${res.coords.longitude}&lat=${res.coords.latitude}&sig={mySig}`
		    axios.get(url)
		      .then(res => upcomingEventsNearYou(res, 'pizza'))
		      .then(eventList => {
		        return this.setState({
		          pizzaList: eventList,
		          loading: false
		        })
		      })
		      .catch(err => {
		        console.log('NETWORK ERROR', err)
		        Alert.alert("There has been an error. Please try again Later.")
		     		this.props.navigation.popToTop()
		     	})
      }
    )
}
```

&nbsp;&nbsp;

```jsx
//my super simple render method
render () {
  	if (this.state.loading === true) {
  		return (
  			<ActivityIndicator size="large" style={{marginTop: 30}}/>
  		)
  	}

    return (
      <Container>
      	<Content>
      		<EventList
      			events={this.state.pizzaList}
      			svg={require('../svgs/Pizza.svg')}
      		/>
      	</Content>
      </Container>
    )
  }
```

&nbsp;&nbsp;

Now, you're probably wondering what `EventList` is in the render method. It's actually pretty simple. Due to the fact that there was a lot of repetition between the two option screens, I decided to make the main rendering chunk (step 6) into its own component so I can reuse it later on. All I pass in as props is the list of events to map over and the icon of the option chosen.

&nbsp;&nbsp;

```jsx
//my entire EventList function
export default function EventList({ events, svg, currentLocation }) {
  return (
    <View>
      {events.map((item) => {
        return (
          <Card style={{ elevation: 3 }} key={item.id}>
            <CardItem>
              <Left>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(item.link).catch((err) =>
                      Alert.alert(
                        "There has been an unexpected error. Please try again later."
                      )
                    )
                  }
                >
                  <SvgUri width="50" height="50" source={svg} />
                </TouchableOpacity>
                <Body>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL(item.link).catch((err) =>
                        Alert.alert(
                          "There has been an unexpected error. Please try again later."
                        )
                      )
                    }
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
                      }}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
                    }}
                    note
                  >
                    On {moment(item.local_date).format("MMM Do YYYY")}, at{" "}
                    {item.local_time}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <MapView
                pitchEnabled={false}
                rotateEnabled={false}
                scrollEnabled={false}
                style={styles.map}
                initialRegion={{
                  ...item.coordinates,
                  latitudeDelta: 0.08,
                  longitudeDelta: 0.04,
                }}
                onPress={() =>
                  Alert.alert("Want Directions to This Event?", null, [
                    {
                      text: "No",
                      style: "destructive",
                    },
                    {
                      text: "Yes",
                      style: "cancel",
                      onPress: () => {
                        console.log(item.coordinates);
                        Linking.openURL(
                          `http://maps.apple.com/?daddr=${
                            item.coordinates.latitude
                          },${item.coordinates.longitude}`
                        );
                      },
                    },
                  ])
                }
              >
                <MapView.Marker
                  coordinate={item.coordinates}
                  title={item.name}
                />
              </MapView>
            </CardItem>
            <CardItem>
              <Text>Interested in this event? Find more info</Text>
              <Text
                style={{
                  fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
                  color: "blue",
                }}
                onPress={() =>
                  Linking.openURL(item.link).catch((err) =>
                    Alert.alert(
                      "There has been an unexpected error. Please try again later."
                    )
                  )
                }
              >
                {" "}
                here!
              </Text>
            </CardItem>
          </Card>
        );
      })}
    </View>
  );
}
```

&nbsp;&nbsp;

In case you're wondering, the actual elements that make up the cards come from **Native Base**, and `MapView` comes from **Expo.**

&nbsp;&nbsp;

And thats pretty much it!

&nbsp;&nbsp;

## The Result

&nbsp;&nbsp;

<div style="display: flex; flex-direction: row; justify-content: space-between">
  <img src="https://www.dropbox.com/s/46mhuk8c1p8ex9q/F4771891-A5D8-41B3-B8B2-516E46121C8D.png?raw=1" width="300px">
  <img style="flex: 1" src="https://www.dropbox.com/s/82kng8a39000uiy/752EBFE6-77D7-4ECB-89CC-923C593A5EC1_1_100_o.jpeg?raw=1" width="200px">
  <img style="flex: 1" src="https://www.dropbox.com/s/8g2mcfr6ludaktc/F5109218-4243-4EBC-AC41-D86708815053_1_100_o.jpeg?raw=1" width="200px">
</div>

&nbsp;&nbsp;

## The Conclusion

&nbsp;&nbsp;

Could the app have been better? Of course it could have! But that wasn't the point. The point was to build a tiny but cool app to get started with learning the ins and outs of React Native. So, overall, not too shabby given that I built it in less than a day!

&nbsp;&nbsp;

So thats Grub! Thank you for reading and I'll see you in the next one!

&nbsp;&nbsp;

<div style="display: flex; justify-content: center">
<img src="https://media.giphy.com/media/42D3CxaINsAFemFuId/giphy.gif">
</div>
