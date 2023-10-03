const randomGenerator = () => {
    const st = "qwertyuioplkjhgfdsazxcvbnm";
    const num1 = Math.floor(Math.random() * st.length);
    const num2 = Math.floor(Math.random() * st.length);
    return(st[num1]+ st[num2]);
}

export default randomGenerator;