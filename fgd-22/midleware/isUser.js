export default function({ $auth, redirect }) {

    //check loggedIn "false"
    if(!$auth.loggedIn) {
        return redirect('/login')
    }

    //check customer role
    if($auth.strategy.name != "user") {
        return redirect('/login')
    } else {
        return
    }
}