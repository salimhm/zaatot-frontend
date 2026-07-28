import '@lib/env.lib';
import { Elysia } from 'elysia';
export declare const app: Elysia<"", {
    decorator: {
        jwt: {
            sign(signValue: {
                [x: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | {
                    [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined;
                nbf?: string | number | undefined;
                exp?: string | number | undefined;
                iat?: boolean | undefined;
                iss?: string | undefined;
                sub?: string | undefined;
                aud?: string | string[] | undefined;
                jti?: string | undefined;
            }): Promise<string>;
            verify(jwt?: string, options?: import("jose").JWTVerifyOptions): Promise<false | ({
                [x: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | {
                    [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined;
            } & Omit<import("@elysiajs/jwt").JWTPayloadSpec, never>)>;
        };
    };
    store: {};
    derive: {};
    resolve: {};
}, {
    typebox: {};
    error: {};
} & {
    typebox: {};
    error: {};
} & {
    typebox: {};
    error: {};
}, {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
}, {
    get: {
        body: unknown;
        params: {};
        query: unknown;
        headers: unknown;
        response: {
            200: {
                code: string;
                error: string;
            } | Response;
        };
    };
} & {
    eden: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: {
                    code: string;
                    error: string;
                } | Response;
            };
        };
    };
} & {
    auth: {};
} & {
    auth: {
        otp: {
            send: {
                post: {
                    body: {
                        user_phone: string;
                        otp_action: "sign_in" | "sign_up";
                    };
                    params: {};
                    query: unknown;
                    headers: unknown;
                    response: {
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                        200: {
                            success: boolean;
                        };
                    };
                };
            };
        };
    };
} & {
    auth: {
        otp: {
            verify: {
                post: {
                    body: {
                        user_first_name?: string | undefined;
                        user_last_name?: string | undefined;
                        user_phone: string;
                        otp_code: string;
                    };
                    params: {};
                    query: unknown;
                    headers: unknown;
                    response: {
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                        200: {
                            data: {
                                user_id: number;
                                user_phone: string;
                                user_first_name: string;
                                user_last_name: string;
                                user_image: string | null;
                                created_at: string;
                            };
                            token: string;
                        };
                    };
                };
            };
        };
    };
} & {
    user: {};
} & {
    user: {
        patch: {
            body: {
                user_phone?: string | undefined;
                user_first_name?: string | undefined;
                user_last_name?: string | undefined;
                user_image?: string | undefined;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        user_id: number;
                        user_phone: string;
                        user_first_name: string;
                        user_last_name: string;
                        user_image: string | null;
                        created_at: string;
                    };
                };
            };
        };
    };
} & {
    brand: {};
} & {
    brand: {
        get: {
            body: unknown;
            params: {};
            query: {
                brand_id?: number[] | undefined;
                brand_name?: string[] | undefined;
                brand_is_boycotted?: boolean[] | undefined;
                count?: "false" | "true" | undefined;
                page?: number | undefined;
                take?: number | undefined;
                combination_type?: "AND" | "OR" | undefined;
                order_by?: string[] | undefined;
                group_by?: ("created_at" | "brand_id" | "brand_name" | "brand_is_boycotted" | "brand_boycott_reasons" | "brand_boycott_alternatives")[] | undefined;
                columns: ("created_at" | "brand_id" | "brand_name" | "brand_is_boycotted" | "brand_boycott_reasons" | "brand_boycott_alternatives")[];
            };
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        created_at?: string | undefined;
                        brand_id?: number | undefined;
                        brand_name?: string | undefined;
                        brand_is_boycotted?: boolean | undefined;
                        brand_boycott_reasons?: string[] | null | undefined;
                        brand_boycott_alternatives?: string[] | null | undefined;
                    }[];
                    page: number;
                    take: number;
                    rows: number | null;
                    pages: number | null;
                };
            };
        };
    };
} & {
    brand: {
        post: {
            body: {
                brand_is_boycotted?: boolean | undefined;
                brand_boycott_reasons?: string[] | undefined;
                brand_boycott_alternatives?: string[] | undefined;
                brand_name: string;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        created_at: string;
                        brand_id: number;
                        brand_name: string;
                        brand_is_boycotted: boolean;
                        brand_boycott_reasons: string[] | null;
                        brand_boycott_alternatives: string[] | null;
                    };
                };
            };
        };
    };
} & {
    brand: {
        put: {
            body: {
                brand_name?: string | undefined;
                brand_is_boycotted?: boolean | undefined;
                brand_boycott_reasons?: string[] | undefined;
                brand_boycott_alternatives?: string[] | undefined;
                brand_id: number;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        created_at: string;
                        brand_id: number;
                        brand_name: string;
                        brand_is_boycotted: boolean;
                        brand_boycott_reasons: string[] | null;
                        brand_boycott_alternatives: string[] | null;
                    };
                };
            };
        };
    };
} & {
    brand: {
        delete: {
            body: {
                brand_id: number;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        created_at: string;
                        brand_id: number;
                        brand_name: string;
                        brand_is_boycotted: boolean;
                        brand_boycott_reasons: string[] | null;
                        brand_boycott_alternatives: string[] | null;
                    };
                };
            };
        };
    };
} & {
    "boycott-provider": {};
} & {
    "boycott-provider": {
        search: {
            post: {
                body: {
                    provider?: "boycat" | undefined;
                    query: string;
                };
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                    200: {
                        data: {
                            provider: "boycat";
                            query: string;
                            provider_status: "not_found" | "matched" | "unavailable" | "invalid_response";
                            results: {
                                campaign_name?: string | undefined;
                                campaign_tier?: number | undefined;
                                brand_name: string;
                                reason: string;
                                confidence: number;
                                decision_status: "boycott" | "not_boycotted" | "unknown" | "needs_review";
                            }[];
                        };
                    };
                };
            };
        };
    };
} & {
    "boycott-provider": {
        decide: {
            post: {
                body: {
                    provider?: "boycat" | undefined;
                    product_name?: string | undefined;
                    brand_name?: string | undefined;
                    product_brand_name?: string | undefined;
                };
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                    200: {
                        data: {
                            provider: "boycat";
                            reason: string;
                            alternatives: {
                                description?: string | undefined;
                                image_url?: string | undefined;
                                name: string;
                            }[];
                            confidence: number;
                            decision_status: "boycott" | "not_boycotted" | "unknown" | "needs_review";
                            matched_entity: {
                                name: string;
                                entity_type: "product" | "brand" | "company";
                                matched_name: string;
                                match_type: "exact" | "alias" | "website" | "fuzzy" | "related_entity" | "none";
                                match_score: number;
                            } | null;
                            sources: {
                                title?: string | undefined;
                                quote?: string | undefined;
                                source_name: string;
                                source_url: string;
                                url: string;
                            }[];
                            provider_status: "not_found" | "matched" | "unavailable" | "invalid_response";
                            campaigns: {
                                name?: string | undefined;
                                created_at?: string | undefined;
                                tier?: {
                                    description?: string | undefined;
                                    title?: string | undefined;
                                    level?: number | undefined;
                                } | null | undefined;
                                source?: string | undefined;
                                reasoning?: string | undefined;
                            }[];
                        };
                    };
                };
            };
        };
    };
} & {
    "boycott-decision": {};
} & {
    "boycott-decision": {
        decide: {
            post: {
                body: {
                    product_name?: string | undefined;
                    product_brand_name?: string | undefined;
                    product_company_name?: string | undefined;
                    product_website_url?: string | undefined;
                    product_category_tags?: string[] | undefined;
                    candidate_names?: string[] | undefined;
                };
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                    200: {
                        data: {
                            reason: string;
                            alternatives: {
                                description?: string | undefined;
                                website_url?: string | undefined;
                                name: string;
                            }[];
                            confidence: number;
                            decision_status: "boycott" | "not_boycotted" | "unknown" | "needs_review";
                            matched_entity: {
                                name: string;
                                entity_type: "product" | "brand" | "company";
                                matched_name: string;
                                match_type: "exact" | "alias" | "website" | "fuzzy" | "related_entity" | "none";
                                match_score: number;
                            } | null;
                            matched_path: string[];
                            sources: {
                                title?: string | undefined;
                                quote?: string | undefined;
                                source_name: string;
                                source_url: string;
                                url: string;
                            }[];
                        };
                    };
                };
            };
        };
    };
} & {
    product: {};
} & {
    product: {
        get: {
            body: unknown;
            params: {};
            query: {
                product_id?: number[] | undefined;
                product_barcode?: string[] | undefined;
                product_type?: "food"[] | undefined;
                product_name?: string[] | undefined;
                brand_id?: number[] | undefined;
                product_nova_group?: (1 | 2 | 3 | 4)[] | undefined;
                product_ecoscore?: ("a" | "b" | "c" | "d" | "e")[] | undefined;
                product_nutriscore?: ("a" | "b" | "c" | "d" | "e")[] | undefined;
                count?: "false" | "true" | undefined;
                page?: number | undefined;
                take?: number | undefined;
                combination_type?: "AND" | "OR" | undefined;
                order_by?: string[] | undefined;
                group_by?: ("created_at" | "product_id" | "product_barcode" | "product_type" | "product_name" | "brand_id" | "product_images" | "product_nova_group" | "product_ecoscore" | "product_nutriscore" | "product_metadata" | "updated_at" | "brand_name" | "brand_is_boycotted" | "brand_boycott_reasons" | "brand_boycott_alternatives")[] | undefined;
                columns: ("created_at" | "product_id" | "product_barcode" | "product_type" | "product_name" | "brand_id" | "product_images" | "product_nova_group" | "product_ecoscore" | "product_nutriscore" | "product_metadata" | "updated_at" | "brand_name" | "brand_is_boycotted" | "brand_boycott_reasons" | "brand_boycott_alternatives")[];
            };
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        created_at?: string | undefined;
                        product_id?: number | undefined;
                        product_barcode?: string | undefined;
                        product_type?: "food" | undefined;
                        product_name?: string | null | undefined;
                        brand_id?: number | null | undefined;
                        product_images?: string[] | null | undefined;
                        product_nova_group?: 1 | 2 | 3 | 4 | null | undefined;
                        product_ecoscore?: "a" | "b" | "c" | "d" | "e" | null | undefined;
                        product_nutriscore?: "a" | "b" | "c" | "d" | "e" | null | undefined;
                        product_metadata?: {
                            ingredients: string[] | null;
                            allergens: string[];
                        } | null | undefined;
                        updated_at?: string | undefined;
                        brand_name?: string | null | undefined;
                        brand_is_boycotted?: boolean | null | undefined;
                        brand_boycott_reasons?: string[] | null | undefined;
                        brand_boycott_alternatives?: string[] | null | undefined;
                    }[];
                    page: number;
                    take: number;
                    rows: number | null;
                    pages: number | null;
                };
            };
        };
    };
} & {
    product: {
        post: {
            body: {
                product_name?: string | undefined;
                brand_id?: number | undefined;
                product_images?: string[] | undefined;
                product_nova_group?: 1 | 2 | 3 | 4 | null | undefined;
                product_ecoscore?: "a" | "b" | "c" | "d" | "e" | null | undefined;
                product_nutriscore?: "a" | "b" | "c" | "d" | "e" | null | undefined;
                product_metadata?: {
                    ingredients: string[] | null;
                    allergens: string[];
                } | undefined;
                product_barcode: string;
                product_type: "food";
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        created_at: string;
                        product_id: number;
                        product_barcode: string;
                        product_type: "food";
                        product_name: string | null;
                        brand_id: number | null;
                        product_images: string[] | null;
                        product_nova_group: 1 | 2 | 3 | 4 | null;
                        product_ecoscore: "a" | "b" | "c" | "d" | "e" | null;
                        product_nutriscore: "a" | "b" | "c" | "d" | "e" | null;
                        product_metadata: {
                            ingredients: string[] | null;
                            allergens: string[];
                        } | null;
                        updated_at: string;
                        brand_name: string | null;
                        brand_is_boycotted: boolean | null;
                        brand_boycott_reasons: string[] | null;
                        brand_boycott_alternatives: string[] | null;
                    };
                };
            };
        };
    };
} & {
    product: {
        patch: {
            body: {
                product_name?: string | undefined;
                brand_id?: number | undefined;
                product_images?: string[] | undefined;
                product_nova_group?: 1 | 2 | 3 | 4 | null | undefined;
                product_ecoscore?: "a" | "b" | "c" | "d" | "e" | null | undefined;
                product_nutriscore?: "a" | "b" | "c" | "d" | "e" | null | undefined;
                product_metadata?: {
                    ingredients: string[] | null;
                    allergens: string[];
                } | undefined;
                product_id: number;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        created_at: string;
                        product_id: number;
                        product_barcode: string;
                        product_type: "food";
                        product_name: string | null;
                        brand_id: number | null;
                        product_images: string[] | null;
                        product_nova_group: 1 | 2 | 3 | 4 | null;
                        product_ecoscore: "a" | "b" | "c" | "d" | "e" | null;
                        product_nutriscore: "a" | "b" | "c" | "d" | "e" | null;
                        product_metadata: {
                            ingredients: string[] | null;
                            allergens: string[];
                        } | null;
                        updated_at: string;
                        brand_name: string | null;
                        brand_is_boycotted: boolean | null;
                        brand_boycott_reasons: string[] | null;
                        brand_boycott_alternatives: string[] | null;
                    };
                };
            };
        };
    };
} & {
    product: {
        delete: {
            body: {
                product_id: number;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        created_at: string;
                        product_id: number;
                        product_barcode: string;
                        product_type: "food";
                        product_name: string | null;
                        brand_id: number | null;
                        product_images: string[] | null;
                        product_nova_group: 1 | 2 | 3 | 4 | null;
                        product_ecoscore: "a" | "b" | "c" | "d" | "e" | null;
                        product_nutriscore: "a" | "b" | "c" | "d" | "e" | null;
                        product_metadata: {
                            ingredients: string[] | null;
                            allergens: string[];
                        } | null;
                        updated_at: string;
                        brand_name: string | null;
                        brand_is_boycotted: boolean | null;
                        brand_boycott_reasons: string[] | null;
                        brand_boycott_alternatives: string[] | null;
                    };
                };
            };
        };
    };
} & {
    scan: {};
} & {
    scan: {
        barcode: {
            post: {
                body: {
                    barcode: string;
                };
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                    200: {
                        data: {
                            product: {
                                created_at: string;
                                product_id: number;
                                product_barcode: string;
                                product_type: "food";
                                product_name: string | null;
                                brand_id: number | null;
                                product_images: string[] | null;
                                product_nova_group: 1 | 2 | 3 | 4 | null;
                                product_ecoscore: "a" | "b" | "c" | "d" | "e" | null;
                                product_nutriscore: "a" | "b" | "c" | "d" | "e" | null;
                                product_metadata: {
                                    ingredients: string[] | null;
                                    allergens: string[];
                                } | null;
                                updated_at: string;
                                brand_name: string | null;
                                brand_is_boycotted: boolean | null;
                                brand_boycott_reasons: string[] | null;
                                brand_boycott_alternatives: string[] | null;
                            } | null;
                            source: "cache" | "provider";
                        };
                    };
                };
            };
        };
    };
} & {
    scan: {
        identify: {
            post: {
                body: {
                    scan_value: string;
                };
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                    200: {
                        data: {
                            product: {
                                created_at: string;
                                product_id: number;
                                product_barcode: string;
                                product_type: "food";
                                product_name: string | null;
                                brand_id: number | null;
                                product_images: string[] | null;
                                product_nova_group: 1 | 2 | 3 | 4 | null;
                                product_ecoscore: "a" | "b" | "c" | "d" | "e" | null;
                                product_nutriscore: "a" | "b" | "c" | "d" | "e" | null;
                                product_metadata: {
                                    ingredients: string[] | null;
                                    allergens: string[];
                                } | null;
                                updated_at: string;
                                brand_name: string | null;
                                brand_is_boycotted: boolean | null;
                                brand_boycott_reasons: string[] | null;
                                brand_boycott_alternatives: string[] | null;
                            } | null;
                            source: {
                                boycott: "provider" | "search" | "unavailable" | "not_requested";
                                product: "cache" | "provider" | null;
                            };
                            scan: {
                                query: string | null;
                                barcode: string | null;
                                scan_type: "unknown" | "text" | "url" | "barcode";
                                raw_value: string;
                            };
                            boycott_decision: {
                                provider: "boycat";
                                reason: string;
                                alternatives: {
                                    description?: string | undefined;
                                    image_url?: string | undefined;
                                    name: string;
                                }[];
                                confidence: number;
                                decision_status: "boycott" | "not_boycotted" | "unknown" | "needs_review";
                                matched_entity: {
                                    name: string;
                                    entity_type: "product" | "brand" | "company";
                                    matched_name: string;
                                    match_type: "exact" | "alias" | "website" | "fuzzy" | "related_entity" | "none";
                                    match_score: number;
                                } | null;
                                sources: {
                                    title?: string | undefined;
                                    quote?: string | undefined;
                                    source_name: string;
                                    source_url: string;
                                    url: string;
                                }[];
                                provider_status: "not_found" | "matched" | "unavailable" | "invalid_response";
                                campaigns: {
                                    name?: string | undefined;
                                    created_at?: string | undefined;
                                    tier?: {
                                        description?: string | undefined;
                                        title?: string | undefined;
                                        level?: number | undefined;
                                    } | null | undefined;
                                    source?: string | undefined;
                                    reasoning?: string | undefined;
                                }[];
                            } | null;
                            boycott_search: {
                                provider: "boycat";
                                query: string;
                                provider_status: "not_found" | "matched" | "unavailable" | "invalid_response";
                                results: {
                                    campaign_name?: string | undefined;
                                    campaign_tier?: number | undefined;
                                    brand_name: string;
                                    reason: string;
                                    confidence: number;
                                    decision_status: "boycott" | "not_boycotted" | "unknown" | "needs_review";
                                }[];
                            } | null;
                        };
                    };
                };
            };
        };
    };
} & {
    "scan-history": {};
} & {
    "scan-history": {
        get: {
            body: unknown;
            params: {};
            query: {
                product_id?: number[] | undefined;
                product_barcode?: string[] | undefined;
                count?: "false" | "true" | undefined;
                page?: number | undefined;
                take?: number | undefined;
                combination_type?: "AND" | "OR" | undefined;
                order_by?: string[] | undefined;
                group_by?: ("product_id" | "product_barcode" | "scan_history_id" | "scanned_at")[] | undefined;
                scan_history_id?: number[] | undefined;
                columns: ("product_id" | "product_barcode" | "scan_history_id" | "scanned_at")[];
            };
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        product?: {
                            created_at: string;
                            product_id: number;
                            product_barcode: string;
                            product_type: "food";
                            product_name: string | null;
                            brand_id: number | null;
                            product_images: string[] | null;
                            product_nova_group: 1 | 2 | 3 | 4 | null;
                            product_ecoscore: "a" | "b" | "c" | "d" | "e" | null;
                            product_nutriscore: "a" | "b" | "c" | "d" | "e" | null;
                            product_metadata: {
                                ingredients: string[] | null;
                                allergens: string[];
                            } | null;
                            updated_at: string;
                            brand_name: string | null;
                            brand_is_boycotted: boolean | null;
                            brand_boycott_reasons: string[] | null;
                            brand_boycott_alternatives: string[] | null;
                        } | null | undefined;
                        product_id?: number | undefined;
                        product_barcode?: string | undefined;
                        scan_history_id?: number | undefined;
                        scanned_at?: string | undefined;
                    }[];
                    page: number;
                    take: number;
                    rows: number | null;
                    pages: number | null;
                };
            };
        };
    };
} & {
    "user-list": {};
} & {
    "user-list": {
        get: {
            body: unknown;
            params: {};
            query: {
                product_id?: number[] | undefined;
                count?: "false" | "true" | undefined;
                page?: number | undefined;
                take?: number | undefined;
                combination_type?: "AND" | "OR" | undefined;
                order_by?: string[] | undefined;
                group_by?: ("created_at" | "product_id" | "user_list_id" | "user_list_type")[] | undefined;
                user_list_id?: number[] | undefined;
                user_list_type?: ("whitelist" | "blacklist")[] | undefined;
                columns: ("created_at" | "product_id" | "user_list_id" | "user_list_type")[];
            };
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        product?: {
                            created_at: string;
                            product_id: number;
                            product_barcode: string;
                            product_type: "food";
                            product_name: string | null;
                            brand_id: number | null;
                            product_images: string[] | null;
                            product_nova_group: 1 | 2 | 3 | 4 | null;
                            product_ecoscore: "a" | "b" | "c" | "d" | "e" | null;
                            product_nutriscore: "a" | "b" | "c" | "d" | "e" | null;
                            product_metadata: {
                                ingredients: string[] | null;
                                allergens: string[];
                            } | null;
                            updated_at: string;
                            brand_name: string | null;
                            brand_is_boycotted: boolean | null;
                            brand_boycott_reasons: string[] | null;
                            brand_boycott_alternatives: string[] | null;
                        } | null | undefined;
                        created_at?: string | undefined;
                        product_id?: number | undefined;
                        user_list_id?: number | undefined;
                        user_list_type?: "whitelist" | "blacklist" | undefined;
                    }[];
                    page: number;
                    take: number;
                    rows: number | null;
                    pages: number | null;
                };
            };
        };
    };
} & {
    "user-list": {
        post: {
            body: {
                product_id: number;
                user_list_type: "whitelist" | "blacklist";
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        product: {
                            created_at: string;
                            product_id: number;
                            product_barcode: string;
                            product_type: "food";
                            product_name: string | null;
                            brand_id: number | null;
                            product_images: string[] | null;
                            product_nova_group: 1 | 2 | 3 | 4 | null;
                            product_ecoscore: "a" | "b" | "c" | "d" | "e" | null;
                            product_nutriscore: "a" | "b" | "c" | "d" | "e" | null;
                            product_metadata: {
                                ingredients: string[] | null;
                                allergens: string[];
                            } | null;
                            updated_at: string;
                            brand_name: string | null;
                            brand_is_boycotted: boolean | null;
                            brand_boycott_reasons: string[] | null;
                            brand_boycott_alternatives: string[] | null;
                        } | null;
                        created_at: string;
                        product_id: number;
                        user_list_id: number;
                        user_list_type: "whitelist" | "blacklist";
                    };
                };
            };
        };
    };
} & {
    "user-list": {
        patch: {
            body: {
                product_id: number;
                user_list_type: "whitelist" | "blacklist";
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        product: {
                            created_at: string;
                            product_id: number;
                            product_barcode: string;
                            product_type: "food";
                            product_name: string | null;
                            brand_id: number | null;
                            product_images: string[] | null;
                            product_nova_group: 1 | 2 | 3 | 4 | null;
                            product_ecoscore: "a" | "b" | "c" | "d" | "e" | null;
                            product_nutriscore: "a" | "b" | "c" | "d" | "e" | null;
                            product_metadata: {
                                ingredients: string[] | null;
                                allergens: string[];
                            } | null;
                            updated_at: string;
                            brand_name: string | null;
                            brand_is_boycotted: boolean | null;
                            brand_boycott_reasons: string[] | null;
                            brand_boycott_alternatives: string[] | null;
                        } | null;
                        created_at: string;
                        product_id: number;
                        user_list_id: number;
                        user_list_type: "whitelist" | "blacklist";
                    };
                };
            };
        };
    };
} & {
    "user-list": {
        delete: {
            body: {
                product_id: number;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        product: {
                            created_at: string;
                            product_id: number;
                            product_barcode: string;
                            product_type: "food";
                            product_name: string | null;
                            brand_id: number | null;
                            product_images: string[] | null;
                            product_nova_group: 1 | 2 | 3 | 4 | null;
                            product_ecoscore: "a" | "b" | "c" | "d" | "e" | null;
                            product_nutriscore: "a" | "b" | "c" | "d" | "e" | null;
                            product_metadata: {
                                ingredients: string[] | null;
                                allergens: string[];
                            } | null;
                            updated_at: string;
                            brand_name: string | null;
                            brand_is_boycotted: boolean | null;
                            brand_boycott_reasons: string[] | null;
                            brand_boycott_alternatives: string[] | null;
                        } | null;
                        created_at: string;
                        product_id: number;
                        user_list_id: number;
                        user_list_type: "whitelist" | "blacklist";
                    };
                };
            };
        };
    };
} & {
    file: {};
} & {
    file: {
        get: {
            body: unknown;
            params: {};
            query: {
                count?: "false" | "true" | undefined;
                page?: number | undefined;
                take?: number | undefined;
                combination_type?: "AND" | "OR" | undefined;
                order_by?: string[] | undefined;
                group_by?: ("user_id" | "created_at" | "file_id" | "file_name")[] | undefined;
                file_id?: string[] | undefined;
                file_name?: string[] | undefined;
                tenant_id: number;
                columns: ("user_id" | "created_at" | "file_id" | "file_name")[];
            };
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        user_id?: number | undefined;
                        created_at?: string | undefined;
                        file_id?: string | undefined;
                        file_name?: string | null | undefined;
                    }[];
                    page: number;
                    take: number;
                    rows: number | null;
                    pages: number | null;
                };
            };
        };
    };
} & {
    file: {
        post: {
            body: {
                tenant_id: number;
                file_name: string;
                file_type: string;
                file_size: number;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        user_id: number;
                        created_at: string;
                        file_id: string;
                        file_name: string | null;
                    };
                    upload_url: string;
                };
            };
        };
    };
} & {
    file: {
        patch: {
            body: {
                file_name?: string | undefined;
                tenant_id: number;
                file_id: string;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        user_id: number;
                        created_at: string;
                        file_id: string;
                        file_name: string | null;
                    };
                };
            };
        };
    };
} & {
    file: {
        delete: {
            body: {
                tenant_id: number;
                file_id: string;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        user_id: number;
                        created_at: string;
                        file_id: string;
                        file_name: string | null;
                    };
                };
            };
        };
    };
} & {
    contact: {};
} & {
    contact: {
        get: {
            body: unknown;
            params: {};
            query: {
                count?: "false" | "true" | undefined;
                page?: number | undefined;
                take?: number | undefined;
                combination_type?: "AND" | "OR" | undefined;
                order_by?: string[] | undefined;
                group_by?: ("created_at" | "contact_id" | "contact_phone" | "contact_name" | "contact_gender" | "contact_birthday" | "contact_national_id" | "contact_passport_id" | "contact_address" | "contact_city" | "contact_country" | "contact_nationality" | "contact_status" | "contact_metadata")[] | undefined;
                contact_id?: number[] | undefined;
                contact_phone?: string[] | undefined;
                contact_name?: string[] | undefined;
                contact_status?: number[] | undefined;
                tenant_id: number;
                columns: ("created_at" | "contact_id" | "contact_phone" | "contact_name" | "contact_gender" | "contact_birthday" | "contact_national_id" | "contact_passport_id" | "contact_address" | "contact_city" | "contact_country" | "contact_nationality" | "contact_status" | "contact_metadata")[];
            };
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        created_at?: string | undefined;
                        contact_id?: number | undefined;
                        contact_phone?: string | undefined;
                        contact_name?: string | null | undefined;
                        contact_gender?: "male" | "female" | null | undefined;
                        contact_birthday?: string | null | undefined;
                        contact_national_id?: string | null | undefined;
                        contact_passport_id?: string | null | undefined;
                        contact_address?: string | null | undefined;
                        contact_city?: "tangier" | "tetouan" | "fnideq" | "martil" | "cabo_negro" | "m_diq" | "larache" | "asilah" | "chefchaouen" | "al_hoceima" | "saidia" | "kenitra" | "rabat" | "sale" | "temara" | "mohammedia" | "casablanca" | "el_jadida" | "safi" | "essaouira" | "oujda" | "fez" | "meknes" | "errachidia" | "settat" | "khouribga" | "beni_mellal" | "marrakesh" | "agadir" | "ouarzazate" | "guelmim" | "laayoune" | "smara" | "dakhla" | null | undefined;
                        contact_country?: "morocco" | null | undefined;
                        contact_nationality?: "morocco" | null | undefined;
                        contact_status?: number | undefined;
                        contact_metadata?: {
                            [x: string]: unknown;
                        } | null | undefined;
                    }[];
                    page: number;
                    take: number;
                    rows: number | null;
                    pages: number | null;
                };
            };
        };
    };
} & {
    contact: {
        post: {
            body: {
                contact_name?: string | undefined;
                contact_gender?: "male" | "female" | undefined;
                contact_birthday?: string | undefined;
                contact_national_id?: string | undefined;
                contact_passport_id?: string | undefined;
                contact_address?: string | undefined;
                contact_city?: "tangier" | "tetouan" | "fnideq" | "martil" | "cabo_negro" | "m_diq" | "larache" | "asilah" | "chefchaouen" | "al_hoceima" | "saidia" | "kenitra" | "rabat" | "sale" | "temara" | "mohammedia" | "casablanca" | "el_jadida" | "safi" | "essaouira" | "oujda" | "fez" | "meknes" | "errachidia" | "settat" | "khouribga" | "beni_mellal" | "marrakesh" | "agadir" | "ouarzazate" | "guelmim" | "laayoune" | "smara" | "dakhla" | undefined;
                contact_country?: "morocco" | undefined;
                contact_nationality?: "morocco" | undefined;
                contact_status?: number | undefined;
                contact_metadata?: {
                    [x: string]: unknown;
                } | null | undefined;
                tenant_id: number;
                contact_phone: string;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        created_at: string;
                        contact_id: number;
                        contact_phone: string;
                        contact_name: string | null;
                        contact_gender: "male" | "female" | null;
                        contact_birthday: string | null;
                        contact_national_id: string | null;
                        contact_passport_id: string | null;
                        contact_address: string | null;
                        contact_city: "tangier" | "tetouan" | "fnideq" | "martil" | "cabo_negro" | "m_diq" | "larache" | "asilah" | "chefchaouen" | "al_hoceima" | "saidia" | "kenitra" | "rabat" | "sale" | "temara" | "mohammedia" | "casablanca" | "el_jadida" | "safi" | "essaouira" | "oujda" | "fez" | "meknes" | "errachidia" | "settat" | "khouribga" | "beni_mellal" | "marrakesh" | "agadir" | "ouarzazate" | "guelmim" | "laayoune" | "smara" | "dakhla" | null;
                        contact_country: "morocco" | null;
                        contact_nationality: "morocco" | null;
                        contact_status: number;
                        contact_metadata: {
                            [x: string]: unknown;
                        } | null;
                    };
                };
            };
        };
    };
} & {
    contact: {
        patch: {
            body: {
                contact_phone?: string | undefined;
                contact_name?: string | undefined;
                contact_gender?: "male" | "female" | undefined;
                contact_birthday?: string | undefined;
                contact_national_id?: string | undefined;
                contact_passport_id?: string | undefined;
                contact_address?: string | undefined;
                contact_city?: "tangier" | "tetouan" | "fnideq" | "martil" | "cabo_negro" | "m_diq" | "larache" | "asilah" | "chefchaouen" | "al_hoceima" | "saidia" | "kenitra" | "rabat" | "sale" | "temara" | "mohammedia" | "casablanca" | "el_jadida" | "safi" | "essaouira" | "oujda" | "fez" | "meknes" | "errachidia" | "settat" | "khouribga" | "beni_mellal" | "marrakesh" | "agadir" | "ouarzazate" | "guelmim" | "laayoune" | "smara" | "dakhla" | undefined;
                contact_country?: "morocco" | undefined;
                contact_nationality?: "morocco" | undefined;
                contact_status?: number | undefined;
                contact_metadata?: {
                    [x: string]: unknown;
                } | null | undefined;
                tenant_id: number;
                contact_id: number;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        created_at: string;
                        contact_id: number;
                        contact_phone: string;
                        contact_name: string | null;
                        contact_gender: "male" | "female" | null;
                        contact_birthday: string | null;
                        contact_national_id: string | null;
                        contact_passport_id: string | null;
                        contact_address: string | null;
                        contact_city: "tangier" | "tetouan" | "fnideq" | "martil" | "cabo_negro" | "m_diq" | "larache" | "asilah" | "chefchaouen" | "al_hoceima" | "saidia" | "kenitra" | "rabat" | "sale" | "temara" | "mohammedia" | "casablanca" | "el_jadida" | "safi" | "essaouira" | "oujda" | "fez" | "meknes" | "errachidia" | "settat" | "khouribga" | "beni_mellal" | "marrakesh" | "agadir" | "ouarzazate" | "guelmim" | "laayoune" | "smara" | "dakhla" | null;
                        contact_country: "morocco" | null;
                        contact_nationality: "morocco" | null;
                        contact_status: number;
                        contact_metadata: {
                            [x: string]: unknown;
                        } | null;
                    };
                };
            };
        };
    };
} & {
    contact: {
        delete: {
            body: {
                tenant_id: number;
                contact_id: number;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        created_at: string;
                        contact_id: number;
                        contact_phone: string;
                        contact_name: string | null;
                        contact_gender: "male" | "female" | null;
                        contact_birthday: string | null;
                        contact_national_id: string | null;
                        contact_passport_id: string | null;
                        contact_address: string | null;
                        contact_city: "tangier" | "tetouan" | "fnideq" | "martil" | "cabo_negro" | "m_diq" | "larache" | "asilah" | "chefchaouen" | "al_hoceima" | "saidia" | "kenitra" | "rabat" | "sale" | "temara" | "mohammedia" | "casablanca" | "el_jadida" | "safi" | "essaouira" | "oujda" | "fez" | "meknes" | "errachidia" | "settat" | "khouribga" | "beni_mellal" | "marrakesh" | "agadir" | "ouarzazate" | "guelmim" | "laayoune" | "smara" | "dakhla" | null;
                        contact_country: "morocco" | null;
                        contact_nationality: "morocco" | null;
                        contact_status: number;
                        contact_metadata: {
                            [x: string]: unknown;
                        } | null;
                    };
                };
            };
        };
    };
} & {
    organization: {};
} & {
    organization: {
        get: {
            body: unknown;
            params: {};
            query: {
                organization_id?: string[] | undefined;
                organization_name?: string[] | undefined;
                count?: "false" | "true" | undefined;
                page?: number | undefined;
                take?: number | undefined;
                combination_type?: "AND" | "OR" | undefined;
                order_by?: string[] | undefined;
                group_by?: ("user_id" | "created_at" | "organization_id" | "organization_name" | "organization_schema_version")[] | undefined;
                columns: ("user_id" | "created_at" | "organization_id" | "organization_name" | "organization_schema_version")[];
            };
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        user_id?: number | undefined;
                        created_at?: string | undefined;
                        organization_id?: number | undefined;
                        organization_name?: string | undefined;
                        organization_schema_version?: string | undefined;
                        organization_db_id?: string | null | undefined;
                        organization_db_url?: string | null | undefined;
                    }[];
                    page: number;
                    take: number;
                    rows: number | null;
                    pages: number | null;
                };
            };
        };
    };
} & {
    organization: {
        post: {
            body: {
                organization_name: string;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        user_id: number;
                        created_at: string;
                        organization_id: number;
                        organization_name: string;
                        organization_schema_version: string;
                        organization_db_id: string | null;
                        organization_db_url: string | null;
                    };
                };
            };
        };
    };
} & {
    organization: {
        patch: {
            body: {
                organization_name?: string | undefined;
                organization_id: number;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        user_id: number;
                        created_at: string;
                        organization_id: number;
                        organization_name: string;
                        organization_schema_version: string;
                        organization_db_id: string | null;
                        organization_db_url: string | null;
                    };
                };
            };
        };
    };
} & {
    organization: {
        delete: {
            body: {
                organization_id: number;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        user_id: number;
                        created_at: string;
                        organization_id: number;
                        organization_name: string;
                        organization_schema_version: string;
                        organization_db_id: string | null;
                        organization_db_url: string | null;
                    };
                };
            };
        };
    };
} & {
    access: {};
} & {
    access: {
        get: {
            body: unknown;
            params: {};
            query: {
                user_id?: number[] | undefined;
                count?: "false" | "true" | undefined;
                page?: number | undefined;
                take?: number | undefined;
                combination_type?: "AND" | "OR" | undefined;
                order_by?: string[] | undefined;
                group_by?: ("user_id" | "created_at" | "access_id" | "actions")[] | undefined;
                tenant_id: number;
                columns: ("user_id" | "created_at" | "access_id" | "actions")[];
            };
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        user_id?: number | undefined;
                        created_at?: string | undefined;
                        access_id?: number | undefined;
                        actions?: "full_access"[] | undefined;
                    }[];
                    page: number;
                    take: number;
                    rows: number | null;
                    pages: number | null;
                };
            };
        };
    };
} & {
    access: {
        post: {
            body: {
                tenant_id: number;
                user_id: number;
                actions: "full_access"[];
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        user_id: number;
                        created_at: string;
                        access_id: number;
                        actions: "full_access"[];
                    };
                };
            };
        };
    };
} & {
    access: {
        patch: {
            body: {
                tenant_id: number;
                user_id: number;
                actions: "full_access"[];
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        user_id: number;
                        created_at: string;
                        access_id: number;
                        actions: "full_access"[];
                    };
                };
            };
        };
    };
} & {
    access: {
        delete: {
            body: {
                tenant_id: number;
                user_id: number;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
                200: {
                    data: {
                        user_id: number;
                        created_at: string;
                        access_id: number;
                        actions: "full_access"[];
                    };
                };
            };
        };
    };
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {
        200: {
            code: string;
            error: string;
        };
    };
} & {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
}>;
export type App = typeof app;
