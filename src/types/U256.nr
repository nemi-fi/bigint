use crate::bigint::BigInt;
use crate::bigint::derive_bigint;

/// An unsigned 256-bit integer.
#[derive_bigint(256)]
pub struct U256 {
    limbs: [u128; 3],
}
