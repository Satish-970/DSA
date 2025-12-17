import java.util.*;

public class ArrayReversal {
    public static void main(String[] args) {
        ArrayReversal s = new ArrayReversal();
        int[] arr = {1, 2, 3, 4};

        s.brute(arr);
        s.optimal(arr);
    }
    void brute(int[] arr) {
        int[] temp = new int[arr.length];
        for (int i = 0; i < arr.length; i++)
            temp[i] = arr[arr.length - 1 - i];
        for (int i = 0; i < arr.length; i++)
            arr[i] = temp[i];
        System.out.println(Arrays.toString(arr));
    }

    void optimal(int[] arr) {
        int l = 0, r = arr.length - 1;
        while (l < r) {
            int t = arr[l];
            arr[l] = arr[r];
            arr[r] = t;
            l++;
            r--;
        }
        System.out.println(Arrays.toString(arr));
    }
}

