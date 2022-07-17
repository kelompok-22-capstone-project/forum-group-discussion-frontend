// isAdmin.js

export default function({ $auth, redirect }) {
    //check loggedIn "false"
    if(!$auth.loggedIn) {
        return redirect('/login')
    }
}