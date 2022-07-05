
export const eventHandlersMaps = new Map([
    ['loaded', function () {
        console.log('Report has loaded');
    }],
    ['rendered', function () {
        console.log('Report has rendered');
    }],
]);
