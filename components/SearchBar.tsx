import { Label, TextInput } from 'flowbite-react';

export default function SearchBar({
    keyword,
    onChange
}: {
    keyword: string;
    onChange: (_: string) => void;
}) {
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor="product-input">Nhập tên sản phẩm</Label>
            <TextInput
                id="product-input"
                placeholder="Quick search..."
                value={keyword}
                onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
                    onChange(event.target.value)
                }
            />
        </div>
    );
}
