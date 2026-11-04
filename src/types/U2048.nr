use crate::bigint::BigInt;
use crate::bigint::derive_bigint;

/// An unsigned 2048-bit integer.
#[derive_bigint(2048)]
pub struct U2048 {
    limbs: [u128; 18],
}
