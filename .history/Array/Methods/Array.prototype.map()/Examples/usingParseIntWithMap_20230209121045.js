//Inspired by this blog post: https://wirfs-brock.com/allen/posts/166

// It is common to use the callback with one argument (the element being traversed). Certain functions are also commonly used with one argument, even though they take additional optional arguments. These habits may lead to confusing behaviors.

//Consider:
;['1', '2', '3'].map(parseInt)

//While one might expect [1, 2, 3], the actual result is [1, NaN, NaN].
