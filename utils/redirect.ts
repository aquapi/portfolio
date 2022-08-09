function redirect(url: string, newPage: boolean = false) {
    return () => {
        if (newPage)
            return window.open(url, "_blank");

        location.href = url;
    };
}

export default redirect;