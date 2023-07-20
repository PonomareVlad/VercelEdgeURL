export const config = {runtime: "edge"}

export default async () => {

    const meta = import.meta;
    const url = import.meta.url;

    const result = {
        raw: {meta, url},
        type: {
            meta: typeof meta,
            url: typeof url,
        }
    }

    console.debug(result);

    return new Response(JSON.stringify(result, null, 2));

}
