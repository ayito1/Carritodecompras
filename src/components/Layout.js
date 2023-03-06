import { Component } from "react";

const styles = {
    Layout: {
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'Flex',
        flexDirection: 'column',
    },
    container: {
        width: '1000px',
    }
}
class Layout extends Component{
    render() {
        return (
            <div style={styles.Layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout