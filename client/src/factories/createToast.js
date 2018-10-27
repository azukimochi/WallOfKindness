let id = 0; 

const defaultOptions = {
    color: '#4b42f4'
};

export default function createToast(options) {
    return {
        ...defaultOptions,
        ...options, 
        id: id++
    }

}