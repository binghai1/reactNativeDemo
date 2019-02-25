export default  class NavigationUtil{
    static navToHome(param){
        const {navigation}=param
        navigation.navigate("main")
    }
    static navBack(navigation){
        navigation.goBack();
    }
}