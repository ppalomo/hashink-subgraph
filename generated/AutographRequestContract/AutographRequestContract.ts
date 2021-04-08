// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class FeePercentChanged extends ethereum.Event {
  get params(): FeePercentChanged__Params {
    return new FeePercentChanged__Params(this);
  }
}

export class FeePercentChanged__Params {
  _event: FeePercentChanged;

  constructor(event: FeePercentChanged) {
    this._event = event;
  }

  get feePercent(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RequestCreated extends ethereum.Event {
  get params(): RequestCreated__Params {
    return new RequestCreated__Params(this);
  }
}

export class RequestCreated__Params {
  _event: RequestCreated;

  constructor(event: RequestCreated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get responseTime(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get created(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class RequestDeleted extends ethereum.Event {
  get params(): RequestDeleted__Params {
    return new RequestDeleted__Params(this);
  }
}

export class RequestDeleted__Params {
  _event: RequestDeleted;

  constructor(event: RequestDeleted) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get responseTime(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get created(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class RequestSigned extends ethereum.Event {
  get params(): RequestSigned__Params {
    return new RequestSigned__Params(this);
  }
}

export class RequestSigned__Params {
  _event: RequestSigned;

  constructor(event: RequestSigned) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get responseTime(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get created(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get metadata(): string {
    return this._event.parameters[6].value.toString();
  }
}

export class AutographRequestContract__requestsResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class AutographRequestContract extends ethereum.SmartContract {
  static bind(address: Address): AutographRequestContract {
    return new AutographRequestContract("AutographRequestContract", address);
  }

  getBalance(): BigInt {
    let result = super.call("getBalance", "getBalance():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getBalance", "getBalance():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getFeePercent(): BigInt {
    let result = super.call("getFeePercent", "getFeePercent():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getFeePercent(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getFeePercent",
      "getFeePercent():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNumberOfPendingRequests(): BigInt {
    let result = super.call(
      "getNumberOfPendingRequests",
      "getNumberOfPendingRequests():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getNumberOfPendingRequests(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNumberOfPendingRequests",
      "getNumberOfPendingRequests():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTotalSupply(): BigInt {
    let result = super.call("getTotalSupply", "getTotalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getTotalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTotalSupply",
      "getTotalSupply():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  requests(param0: BigInt): AutographRequestContract__requestsResult {
    let result = super.call(
      "requests",
      "requests(uint256):(address,address,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new AutographRequestContract__requestsResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_requests(
    param0: BigInt
  ): ethereum.CallResult<AutographRequestContract__requestsResult> {
    let result = super.tryCall(
      "requests",
      "requests(uint256):(address,address,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AutographRequestContract__requestsResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  version(): BigInt {
    let result = super.call("version", "version():(uint256)", []);

    return result[0].toBigInt();
  }

  try_version(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("version", "version():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class CreateRequestCall extends ethereum.Call {
  get inputs(): CreateRequestCall__Inputs {
    return new CreateRequestCall__Inputs(this);
  }

  get outputs(): CreateRequestCall__Outputs {
    return new CreateRequestCall__Outputs(this);
  }
}

export class CreateRequestCall__Inputs {
  _call: CreateRequestCall;

  constructor(call: CreateRequestCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CreateRequestCall__Outputs {
  _call: CreateRequestCall;

  constructor(call: CreateRequestCall) {
    this._call = call;
  }
}

export class DeleteRequestCall extends ethereum.Call {
  get inputs(): DeleteRequestCall__Inputs {
    return new DeleteRequestCall__Inputs(this);
  }

  get outputs(): DeleteRequestCall__Outputs {
    return new DeleteRequestCall__Outputs(this);
  }
}

export class DeleteRequestCall__Inputs {
  _call: DeleteRequestCall;

  constructor(call: DeleteRequestCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DeleteRequestCall__Outputs {
  _call: DeleteRequestCall;

  constructor(call: DeleteRequestCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _celebrityContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _autographContract(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetFeePercentCall extends ethereum.Call {
  get inputs(): SetFeePercentCall__Inputs {
    return new SetFeePercentCall__Inputs(this);
  }

  get outputs(): SetFeePercentCall__Outputs {
    return new SetFeePercentCall__Outputs(this);
  }
}

export class SetFeePercentCall__Inputs {
  _call: SetFeePercentCall;

  constructor(call: SetFeePercentCall) {
    this._call = call;
  }

  get _feePercent(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeePercentCall__Outputs {
  _call: SetFeePercentCall;

  constructor(call: SetFeePercentCall) {
    this._call = call;
  }
}

export class SignRequestCall extends ethereum.Call {
  get inputs(): SignRequestCall__Inputs {
    return new SignRequestCall__Inputs(this);
  }

  get outputs(): SignRequestCall__Outputs {
    return new SignRequestCall__Outputs(this);
  }
}

export class SignRequestCall__Inputs {
  _call: SignRequestCall;

  constructor(call: SignRequestCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get metadata(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SignRequestCall__Outputs {
  _call: SignRequestCall;

  constructor(call: SignRequestCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}