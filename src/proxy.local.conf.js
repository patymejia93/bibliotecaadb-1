const PROXY_CONFIG = [
    {
        context: ["/oauth"],
        target: "http://localhost:8090",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    },
    {
        context: ["/materialEscrito"],
        target: "http://localhost:8090",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    },
    {
        context: ["/materialAudiovisual"],
        target: "http://localhost:8090",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    },
    {
        context: ["/estadoPrestamo"],
        target: "http://localhost:8090",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    },
    {
        context: ["/cantidadArtPrestamo"],
        target: "http://localhost:8090",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    },
    {
        context: ["/tipoArticulo"],
        target: "http://localhost:8090",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    },
    {
        context: ["/role"],
        target: "http://localhost:8090",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    },
    {
        context: ["/user"],
        target: "http://localhost:8090",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
    },
];

module.exports = PROXY_CONFIG;
