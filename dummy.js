super();
this.state = {
  data: [
    { name: "Movies", header: true },
    { name: "Interstellar", header: false },
    { name: "Dark Knight", header: false },
    { name: "Pop", header: false },
    { name: "Pulp Fiction", header: false },
  ],

  count: 0,
  clicked: '',
};
render() {
  return (
    <Root>
    <View>
    <TouchableOpacity
      onPress={() =>
          ActionSheet.show(
            {
              options: BUTTONS,
              destructiveButtonIndex: DESTRUCTIVE_INDEX,
              title: "Testing ActionSheet"
            },
            buttonIndex => {
              this.setState({ clicked: BUTTONS[buttonIndex] });
            }
          )}
     >
      <Text> Touch Here </Text>
      <Text> Touch Here 1</Text>
      <Text> Touch Here 2</Text>
      <Text> Touch Here 3</Text>
      <Text> Touch Here 4</Text>
     </TouchableOpacity>
    </View>
    </Root>
  );
}
}
