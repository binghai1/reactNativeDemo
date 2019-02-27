export default  class NavigationUtil{
    static navToHome(param){
        const {navigation}=param
        navigation.navigate("main")
    }
    static navBack(navigation){
        navigation.goBack();
    }
    static goPage(page,param){
        const navigation=NavigationUtil.navigation
        if(!navigation){
            console.log("navigation can not be null")
        }
        navigation.navigate(page,{...param})
    }
}