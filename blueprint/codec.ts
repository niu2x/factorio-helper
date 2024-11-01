// example
import {Buffer} from "buffer"
import zlib from "zlib"

export class BlueprintCodec {
	version: string = '0';

	encode(blueprint: object) {
		const encodedData = this._encode(blueprint)
		const blueprintString = this._prependVersion(encodedData)
		return blueprintString;
	}

	decode(blueprintString: string) {
	    const encodedData = this._removeVersion(blueprintString)
	    const blueprintData = this._decode(encodedData)
	    return blueprintData;
	}

	_prependVersion(encodedData : string) {
		return this.version + encodedData;
	}

	_removeVersion(blueprintString: string) {
		const prefix = blueprintString.slice(0, this.version.length);
	    if (prefix !== this.version) {
	        throw new Error('Invalid blueprint string prefix');
	    }
	    return blueprintString.slice(this.version.length);
	}

	_decode(encodedData: string) {
		const decodedData = Buffer.from(encodedData, 'base64');
	    const decompressedData = zlib.inflateSync(decodedData);
	    const jsonString = decompressedData.toString('utf-8');
	    const blueprintData = JSON.parse(jsonString);
	    return blueprintData;
	}
	_encode(blueprint: object) {
		const jsonString = JSON.stringify(blueprint);

		// console.log("jsonString", jsonString)
		// console.log("Buffer.from(jsonString, 'utf-8')", Buffer.from(jsonString, 'utf-8'))
		// Zlib压缩
		// const compressedData = zlib.deflateSync(Buffer.from(jsonString, 'utf-8'));
		const compressedData = zlib.deflateSync(jsonString);
		// Base64编码
		const encodedData = compressedData.toString('base64');

		return encodedData;
		// 添加前缀
		const blueprintString = '0e' + encodedData;
		return blueprintString;
	}
}

