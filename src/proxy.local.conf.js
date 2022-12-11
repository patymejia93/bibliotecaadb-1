const PROXY_CONFIG = [
    {
        context: ["/oauth"],
        target: "http://192.168.5.164:8090",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    },
    {
        context: ["/materialEscrito"],
        target: "http://192.168.5.164:8090",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    },
    {
        context: ["/materialAudiovisual"],
        target: "http://192.168.5.164:8090",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    },
    {
        context: ["/estadoPrestamo"],
        target: "http://192.168.5.164:8090",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    },
    {
        context: ["/cantidadArtPrestamo"],
        target: "http://192.168.5.164:8090",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    },
    {
        context: ["/tipoArticulo"],
        target: "http://192.168.5.164:8090",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    },
    {
        context: ["/role"],
        target: "http://192.168.5.164:8090",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    },
    {
        context: ["/user"],
        target: "http://192.168.5.164:8090",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    },
    {
        context: ["/prestamo"],
        target: "http://192.168.5.164:8090",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    }
];

module.exports = PROXY_CONFIG;
