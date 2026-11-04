use crate::constants::TWO_POW_120;

/// Returns the modulus `2^(MOD_BITS - 1)` of a `BigInt` with `N` limbs, as 120-bit limbs.
///
/// All `BigInt` arithmetic is performed modulo this value.
pub fn get_modulus<let N: u32, let MOD_BITS: u32>() -> [u128; N] {
    let mut result: [u128; N] = [0; N];
    result[N - 1] = 1 << ((MOD_BITS - 1 - (N - 1) * 120) as u128);
    result
}

/// Returns `2 * modulus` in a redundant limb representation, used for the negated terms of
/// quadratic expressions.
///
/// This is _not_ the canonical limb representation of `2 * modulus`: each limb except the most
/// significant one borrows `2^120` from the next, so that limb-wise subtractions
/// `double_modulus[i] - x[i]` never underflow for any `x` whose limbs are at most 120 bits.
pub(crate) fn get_double_modulus<let N: u32, let MOD_BITS: u32>() -> [u128; N] {
    let modulus: [u128; N] = get_modulus::<N, MOD_BITS>();
    let mut result: [u128; N] = [0; N];
    let mut carry: u128 = 0;
    for i in 0..N {
        let mut add_term = (modulus[i] + modulus[i] + carry);
        carry = add_term >> 120;
        add_term = add_term - (carry << 120);
        result[i] = add_term;
    }

    result[0] += TWO_POW_120;
    for i in 1..N - 1 {
        result[i] += (TWO_POW_120 - 1);
    }
    result[N - 1] -= 1;
    result
}
