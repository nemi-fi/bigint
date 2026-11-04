use crate::bigint::BigInt;
use crate::bigint::derive_bigint;

/// An unsigned 384-bit integer.
#[derive_bigint(4, 385)]
pub struct U384 {
    limbs: [u128; 4],
}
