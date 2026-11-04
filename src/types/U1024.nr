use crate::bigint::BigInt;
use crate::bigint::derive_bigint;
use crate::params::BigIntParams;

pub global U1024_PARAMS: BigIntParams<9, 1025> = BigIntParams {
    modulus: [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x010000000000000000],
    double_modulus: [
        0x01000000000000000000000000000000,
        0xffffffffffffffffffffffffffffff,
        0xffffffffffffffffffffffffffffff,
        0xffffffffffffffffffffffffffffff,
        0xffffffffffffffffffffffffffffff,
        0xffffffffffffffffffffffffffffff,
        0xffffffffffffffffffffffffffffff,
        0xffffffffffffffffffffffffffffff,
        0x01ffffffffffffffff,
    ],
    redc_param: [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01000000000000000000],
};

#[derive_bigint(9, 1025, quote { U1024_PARAMS })]
pub struct U1024 {
    limbs: [u128; 9],
}
