use crate::bigint::BigInt;
use crate::bigint::derive_bigint;

/// An unsigned 1024-bit integer.
#[derive_bigint(9, 1025)]
pub struct U1024 {
    limbs: [u128; 9],
}
