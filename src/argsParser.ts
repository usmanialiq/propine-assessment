interface IArguments {
    token: string;
    date: string;
}

export function argsParser(args: string[]): IArguments {
    let obj: IArguments = {
        token: '',
        date: '',
    };
    
    if (!args[0] && !args[1]) {
        return obj;
    }

    if (['BTC', 'ETH', 'XRP'].includes(args[0])) {
        obj = {
            ...obj,
            token: args[0],
        };
    }
    else if (['BTC', 'ETH', 'XRP'].includes(args[1])) {
        obj = {
            ...obj,
            token: args[1],
        };
    }
    
    // eslint-disable-next-line no-useless-escape
    if (args[0].match(/^\d{2}[./-]\d{2}[./-]\d{4}$/)) {
        obj = {
            ...obj,
            date: args[0],
        };
    }
    // eslint-disable-next-line no-useless-escape
    else if (args[1].match(/^\d{2}[./-]\d{2}[./-]\d{4}$/)) {
        obj = {
            ...obj,
            date: args[1],
        };
    }

    else {
        obj = {
            token: args[0],
            date: args[1],
        };
    }

    return {
        token: obj.token.length ? obj.token : null,
        date: obj.date.length ? obj.date : null,
    };
}