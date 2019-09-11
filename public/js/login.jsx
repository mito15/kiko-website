const LoginForm = React.createClass({
    getInitialState: function () {
        return { userID: "", password: "", message: "" };
    },
    updateUserID: function (e) {
        this.setState({ userID: e.target.value });
    },
    updatePassword: function (e) {
        this.setState({ password: e.target.value });
    },
    login: function (e) {
        e.preventDefault();
        const body = { userID: this.state.userID, password: this.state.password };

        $.ajax({
            url: "/api/login",
            dataType: 'json',
            type: 'POST',
            data: body
        })
        .then(
            function (data) {
                if (data.authorized) {
                    this.setState({ message: "Login Succeeded." });
                }
                else {
                    this.setState({ message: "Login Failed." });
                }
            }.bind(this),
            function () {
                console.error("Error");
                console.error(this.props.url);
                console.error(body);
            }.bind(this)
        );
    },
    render: function () {
        return (
            <article>
                <h1>横浜機工株式会社様　ログインページ</h1>
                <form onSubmit={this.login}>
                    <table>
                        <tbody>
                            <tr>
                                <td>User ID: </td>
                                <td><input type="text" placeholder="user id" value={this.state.userID} onChange={this.updateUserID} /></td>
                            </tr>
                            <tr>
                                <td>Password: </td>
                                <td><input type="password" placeholder="password" value={this.state.password} onChange={this.updatePassword} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" value="Login" />
                </form>
                <p>{this.state.message}</p>
            </article>
        );
    }
});

React.render(
    <LoginForm />,
    document.getElementById('body')
);