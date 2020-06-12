// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.7.0;

interface ApproveAndCallFallBack {
    function receiveApproval(address from, uint256 _amount, address _token, bytes calldata _data) external;
}
