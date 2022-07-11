export default function() {

    if(this.$store.state.login.role != "admin") {
        return this.$router.push("/");
    }

}