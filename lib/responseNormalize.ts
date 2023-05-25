class ResponseNormalize {
    private code?: number;
    private data?: unknown = null;
    private message?: string;

    constructor(code?: number, json?: unknown) {
        this.code = code
        this.data = json
    }

    public status(status: number): this {
        this.code = status
        return this
    }

    public json(json: unknown): this {
        this.data = json
        return this
    }

    public msg(msg: string): this {
        this.message = msg
        return this
    }

    public stringify(): string {
        return JSON.stringify(this)
    }
}

export default new ResponseNormalize()
